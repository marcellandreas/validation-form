import React, { useState, useRef } from "react";
import "../App.css";

const PageForm = () => {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };
  const baseError = {
    nama: "",
    email: "",
    noHandphone: "",
  };

  const suratKesungguhan = useRef("");
  const [data, setData] = useState(baseData);
  const [errorMassage, SetErrorMassage] = useState({ baseError });
  const regexEmail =
    /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
  const regex = /^[a-zA-Z ]*$/;
  // const [isPasswordError, setIsPasswordError] = useState(false);

  const handleInput = (e) => {
    let dataInput = { ...data };
    dataInput[e.target.name] = e.target.value;

    const name = e.target.name;
    const value = e.target.value;

    if (name === "nama") {
      setData(value);
      if (!regex.test(value)) {
        SetErrorMassage((val) => ({
          ...val,
          nama: "Nama Lengkap Tidak Boleh Angka",
        }));
      } else {
        SetErrorMassage("");
      }
    }

    if (name === "email") {
      setData(value);
      if (!regexEmail.test(value)) {
        SetErrorMassage((val) => ({ ...val, email: "Email Tidak sesuai" }));
      } else {
        SetErrorMassage("");
      }
    }

    if (name === "noHandphone") {
      if (data.noHandphone.length <= 8 || data.noHandphone.length >= 14) {
        SetErrorMassage((val) => ({
          ...val,
          noHandphone: "no handphone tidak sesuai",
        }));
      } else {
        SetErrorMassage("");
      }
    }

    // if (name === "noHandphone") {
    //   if (value.length <= 8 || value.length >= 14) {
    //     setIsPasswordError(true);
    //   } else {
    //     setIsPasswordError(false);
    //   }
    // }

    setData(dataInput);
    console.log("data yang masuk", data);
  };
  const handleSubmit = (e) => {
    if (errorMassage !== "") {
      alert("Data Pendaftar Tidak Sesuai");
    } else {
      alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`);
    }
    e.preventDefault();
  };

  const handleReset = (e) => {
    e.preventDefault();
    setData({
      nama: "",
      email: "",
      noHandphone: "",
      pendidikan: "",
      kelas: "",
      harapan: "",
    });
    SetErrorMassage({
      nama: "",
      email: "",
      noHandphone: "",
    });
  };
  return (
    <div className="container pt-5 pb-5">
      <div className="row align-items-stars">
        <div className="col">
          <div className="card container-card" style={{ width: "100%" }}>
            <div className="card-body">
              <h3 className="card-title text-center">
                Pendaftaran Peserta Coding Bootcamp
              </h3>
              <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-12 mb-3">
                  <label className="form-tabel">Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nama"
                    required
                    onChange={handleInput}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label className="form-tabel">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                    onChange={handleInput}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label className="form-tabel">Nomor Handphone</label>
                  <input
                    type="number"
                    className="form-control"
                    name="noHandphone"
                    value={data.noHandphone}
                    required
                    onChange={handleInput}
                  />
                  {/* {isPasswordError && <p>No handphone harus lebih dari 8</p>} */}
                </div>
                <div className="col-md-12 mb-3">
                  <label className="form-tabel">
                    latar Belakang Pendidikan
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      value="IT"
                      label="IT"
                      onChange={handleInput}
                    />
                    <label className="form-check-label">IT</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      value="non IT"
                      label="non IT"
                      onChange={handleInput}
                    />
                    <label className="form-check-label"> Non IT</label>
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <label className="form-tabel">
                    Kelas Coding yang Dipilih
                  </label>
                  <select
                    className="form-control"
                    name="kelas"
                    required
                    onChange={handleInput}
                  >
                    <option>Pilih Salah Satu Program</option>
                    <option value="Coding Backend with Golang">
                      Coding Backend with Golang
                    </option>
                    <option value="Coding Frontend with ReactJS">
                      Coding Frontend with ReactJS
                    </option>
                    <option value="Fullstack Developer">
                      Fullstack Developer
                    </option>
                  </select>
                </div>
                <div className="col-md-12 mb-3">
                  <label className="form-tabel">Foto Surat Kesungguhan</label>
                  <input
                    type="file"
                    className="form-control"
                    required
                    onChange={handleInput}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label className="form-tabel">
                    Harapan untuk Coding Bootcamp ini
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="harapan"
                    ref={suratKesungguhan}
                    onChange={handleInput}
                  />
                </div>
                <span>{errorMassage.nama}</span>
                <span>{errorMassage.email}</span>
                <span>{errorMassage.noHandphone}</span>

                <div className="col-md-9 mt-2">
                  <button className="btn" type="submit" value="submit">
                    Submit
                  </button>
                  <button className="ms-3 btn" onClick={handleReset}>
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageForm;
