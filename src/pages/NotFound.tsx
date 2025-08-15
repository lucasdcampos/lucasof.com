import ChromeDinoGame from 'react-chrome-dino';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-2">Page not found</p>
      <p className="text-base text-gray-500 text-sm">Press space to play</p>
      <div className="mb-8 w-full max-w-xl">
        <ChromeDinoGame />
      </div>
      <a href="/" className="text-blue-400 underline">Back to Home</a>
    </div>
  );
}