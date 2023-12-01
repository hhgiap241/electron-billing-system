import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { InvoiceList, CreateInvoice } from './pages/Invoice';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="invoices" element={<InvoiceList />}>
          <Route path="create" element={<CreateInvoice />} />
        </Route>
      </Routes>
    </Router>
  );
}
