import React from "react";

function LoginMessage({ isLoggedIn, messages }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Halo, selamat datang kembali! </p>
      ) : (
        <p>Silakan login terlebih dahulu </p>
      )}

      {/* Logical AND (&&) */}
      {messages.length > 0 && (
        <p>Anda punya {messages.length} pesan baru </p>
      )}
    </div>
  );
}

export default LoginMessage;
