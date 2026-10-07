import React from 'react';
import Calculator from './Bài 1/Calculator'; // Đảm bảo đường dẫn đúng với tên thư mục của bạn
import CV from './bài 2/CV';             // Đảm bảo đường dẫn đúng với tên thư mục của bạn

function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Bài tập React - Lê Tiến Mạnh (B25DCTV055)</h1>
      <hr style={{ margin: '30px 0' }} />
      
      {/* Bài 1 */}
      <div style={{ marginBottom: '40px' }}>
        <Calculator />
      </div>

      <hr style={{ margin: '30px 0' }} />

      {/* Bài 2 */}
      <div>
        <CV />
      </div>
    </div>
  );
}

export default App;
