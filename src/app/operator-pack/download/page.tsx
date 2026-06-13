import { jwtVerify } from 'jose';
import Link from 'next/link';
import { DownloadTimer } from './DownloadTimer';

export const metadata = {
  title: 'Download Operator Pack | Fullstack Forge',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DownloadPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const resolvedParams = await searchParams;
  const token = resolvedParams.token;

  if (!token) {
    return <ErrorState message="No download token provided." />;
  }

  let validPayload = null;
  
  try {
    const secret = new TextEncoder().encode(
      process.env.DOWNLOAD_JWT_SECRET || 'placeholder_secret_replace_before_launch'
    );
    
    const { payload } = await jwtVerify(token, secret);
    
    if (!payload.exp) {
      throw new Error("Invalid token format");
    }
    
    validPayload = payload;
  } catch (error) {
    return <ErrorState message="Invalid or expired download link." />;
  }

  const expiresAt = validPayload.exp! * 1000;
  const downloadUrl = process.env.BLOB_DOWNLOAD_URL || '#';

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-gray-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful</h1>
        <p className="text-gray-600 mb-8">Your Operator Pack is ready.</p>
        
        <a
          href={downloadUrl}
          className="block w-full bg-blue-600 text-white font-bold text-lg px-6 py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md mb-6"
          download
        >
          Download Operator Pack v1
        </a>
        
        <div className="bg-orange-50 border border-orange-100 rounded-lg p-4">
          <p className="text-sm text-orange-800 font-medium mb-1">Link expires in:</p>
          <DownloadTimer expiresAt={expiresAt} />
        </div>
      </div>
    </main>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center border border-red-100">
        <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-gray-900 mb-2">Download Error</h1>
        <p className="text-gray-600 mb-8">{message}</p>
        <Link 
          href="/operator-pack"
          className="inline-block bg-gray-900 text-white font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Return to product page
        </Link>
      </div>
    </div>
  );
}