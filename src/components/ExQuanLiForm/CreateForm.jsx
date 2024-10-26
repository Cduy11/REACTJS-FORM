import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateFrom, UpdateForm } from "../../redux/action";

export default function CreateForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    maSv: "",
    soDienThoai: "",
    hoTen: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false)

  // Lấy thông tin chỉnh sửa từ redux về
  const thongTinChinhSua = useSelector(
    (state) => state.QuanLiFormReducer.thongTinChinhSua
  );

  // Cập nhật form khi chọn sinh viên để sửa
  useEffect(() => {
    if (thongTinChinhSua) {
      setFormData(thongTinChinhSua);
      setIsEditing(true)
    }else{
      setIsEditing(false)
    }
  }, [thongTinChinhSua]);

  // Hàm thay đổi form
  const hanldeChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Reset lỗi khi người dùng bắt đầu nhập
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Hàm kiểm tra validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.maSv) {
      newErrors.maSv = "Mã sinh viên không được để trống!";
    }
    if (!/^[0-9]{10}$/.test(formData.soDienThoai)) {
      newErrors.soDienThoai = "Số điện thoại phải có 10 chữ số!";
    }
    if (!formData.hoTen) {
      newErrors.hoTen = "Họ tên không được để trống!";
    }
    if (!formData.email) {
      newErrors.email = "Email không được để trống!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  // Hàm add and update
  const hanldeAddOrUpdateForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (thongTinChinhSua) {
        dispatch(UpdateForm(formData));
      } else {
        dispatch(CreateFrom(formData));
      }
      setFormData({ maSv: "", soDienThoai: "", hoTen: "", email: "" });
      setErrors({});
      setIsEditing(false)
    }
  };

  return (
    <div>
      <form onSubmit={hanldeAddOrUpdateForm}>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">ID</label>
              <input
                type="text"
                name="maSv"
                className="form-control"
                value={formData.maSv}
                onChange={hanldeChangeForm}
                disabled={isEditing}
              />
              {errors.maSv && (
                <small className="text-danger">{errors.maSv}</small>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Số Điện Thoại</label>
              <input
                type="text"
                name="soDienThoai"
                className="form-control"
                value={formData.soDienThoai}
                onChange={hanldeChangeForm}
              />
              {errors.soDienThoai && (
                <small className="text-danger">{errors.soDienThoai}</small>
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label className="form-label">Họ Tên</label>
              <input
                type="text"
                name="hoTen"
                className="form-control"
                value={formData.hoTen}
                onChange={hanldeChangeForm}
              />
              {errors.hoTen && (
                <small className="text-danger">{errors.hoTen}</small>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={hanldeChangeForm}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-danger">
          {isEditing  ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}
