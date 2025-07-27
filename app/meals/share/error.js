// In order to catch error even from client side
'use client';

// Error prop gives information about the details of error
export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to create meal.</p>
    </main>
  );
}
