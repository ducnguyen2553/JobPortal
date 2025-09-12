# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Context
1. Context trong React là gì?

Context dùng để chia sẻ state (dữ liệu) hoặc hàm cho nhiều component mà không cần truyền props thủ công qua từng cấp.

Thường đi chung với Context API (React.createContext, useContext, Context.Provider).

2. Trong folder context thường để gì?

Trong dự án React, folder context thường chứa:

✅ File tạo Context

Nơi bạn định nghĩa context, ví dụ AuthContext.js để quản lý đăng nhập, đăng xuất.

Bên trong sẽ có createContext, Provider, và logic liên quan.