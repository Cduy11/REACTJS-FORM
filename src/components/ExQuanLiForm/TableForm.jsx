import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteForm, EditForm } from "../../redux/action";

export default function TableForm() {
  const dispatch = useDispatch();

  // Lấy dữ liệu từ Redux
  const mangThongTin = useSelector(
    (state) => state.QuanLiFormReducer.mangThongTin
  );

  // Hàm xoá
  const handleDelete = (maSv) => {
    dispatch(DeleteForm(maSv));
  };

  // Hàm edit
  const handleEdit = (maSv) => {
    const studentEdit = mangThongTin.find((sv) => sv.maSv === maSv);
    dispatch(EditForm(studentEdit));
  };

  // Render dữ liệu lên màn hình
  const renderThongTin = () =>
    mangThongTin.map((thongTin) => (
      <tr key={thongTin.maSv}>
        <td>{thongTin.maSv}</td>
        <td>{thongTin.soDienThoai}</td>
        <td>{thongTin.hoTen}</td>
        <td>{thongTin.email}</td>
        <td className="text-center">
          <button
            className="btn btn-danger btn-sm me-2"
            onClick={() => handleDelete(thongTin.maSv)}
          >
            <i className="fas fa-trash-alt"></i> Remove
          </button>
          <button
            className="btn btn-warning btn-sm"
            onClick={() => handleEdit(thongTin.maSv)}
          >
            <i className="fas fa-edit"></i> Edit
          </button>
        </td>
      </tr>
    ));

  return (
    <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark text-center">
            <tr>
              <th>Mã Sinh Viên</th>
              <th>Số điện thoại</th>
              <th>Họ và Tên</th>
              <th>Email</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>{renderThongTin()}</tbody>
        </table>
      </div>
    </div>
  );
}
  