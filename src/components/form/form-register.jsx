// import React, { useState } from 'react';
// import logoGoogle from '../../assets/logos/logos_google-icon.png';
// import hidePass from '../../assets/form/mdi_eye-off.png';

// const FormRegister = () => {
//     // Menggunakan useState untuk mengelola input form
//     const [fullname, setFullname] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [countryCode, setCountryCode] = useState('+62');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const handleHomeClick = (e) => {
//         e.preventDefault();
//         window.location.href = "/home";
//     };

//     const handleLoginClick = (e) => {
//         e.preventDefault();
//         window.location.href = "/login";
//     };

//     const handleFullnameChange = (e) => {
//         setFullname(e.target.value);
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePhoneChange = (e) => {
//         setPhone(e.target.value);
//     };

//     const handleCountryCodeChange = (e) => {
//         setCountryCode(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleConfirmPasswordChange = (e) => {
//         setConfirmPassword(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Tambahkan logika untuk mengirim data registrasi
//         console.log('Fullname:', fullname);
//         console.log('Email:', email);
//         console.log('Phone:', phone);
//         console.log('Country Code:', countryCode);
//         console.log('Password:', password);
//         console.log('Confirm Password:', confirmPassword);
//     };

//     return (
//         <div className="flex items-center justify-center w-full">
//             <div className='flex flex-col bg-white border-form p-9 rounded-[4px] shadow-lg w-[590px] gap-9'>
//                 <form action="" method="post" className="space-y-4" onSubmit={handleSubmit}>
//                     <div className='flex flex-col gap-[10px]'>
//                         <h3 className="text-center">Pendaftaran Akun</h3>
//                         <p className="text-center text-input">Yuk, daftarkan akunmu sekarang juga!</p>
//                     </div>
//                     <div>
//                         <label htmlFor="fullname" className="text-input">
//                             <div className='flex gap-1'>
//                                 Nama Lengkap
//                                 <p className='text-red-600'>*</p>
//                             </div>
//                         </label>
//                         <input type="text" name="fullname" className='input-form' id="fullname" value={fullname} onChange={handleFullnameChange} />
//                     </div>
//                     <div>
//                         <label htmlFor="email" className="text-input">
//                             <div className='flex gap-1'>
//                                 E-Mail
//                                 <p className='text-red-600'>*</p>
//                             </div>
//                         </label>
//                         <input type="email" name="email" className='input-form' id="email" value={email} onChange={handleEmailChange} />
//                     </div>
//                     <div>
//                         <label htmlFor="phone" className="textinput">
//                             <div className='flex gap-1'>
//                                 No.Hp
//                                 <p className='text-red-600'>*</p>
//                             </div>
//                         </label>
//                         <div className="flex gap-6">
//                             <select name="country" id="country" value={countryCode} onChange={handleCountryCodeChange}>
//                                 <option value="+62">+62</option>
//                                 <option value="+65">+65</option>
//                                 <option value="+60">+60</option>
//                             </select>
//                             <input type="tel" name="phone" className='input-form' id="phone" value={phone} onChange={handlePhoneChange} />
//                         </div>
//                     </div>
//                     <div className='relative'>
//                         <label htmlFor="password" className="text-input">
//                             <div className='flex gap-1'>
//                                 Kata Sandi
//                                 <p className='text-red-600'>*</p>
//                             </div>
//                         </label>
//                         <input type="password" name="password" id="password" className="input-form pr-10" value={password} onChange={handlePasswordChange} />
//                         <img src={hidePass} alt="hide-password" className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer" />
//                     </div>
//                     <div className="relative">
//                         <label htmlFor="confirm_password" className="text-input">
//                             <div className='flex gap-1'>
//                                 Konfirmasi Kata Sandi
//                                 <p className='text-red-600'>*</p>
//                             </div>
//                         </label>
//                         <input type="password" name="confirm_password" id="confirm_password" className="input-form pr-10" value={confirmPassword} onChange={handleConfirmPasswordChange} />
//                         <img src={hidePass} alt="hide-password" className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer" />
//                     </div>
//                     <div className="w-full text-right">
//                         <a href="#" className="text-home">Lupa Password?</a>
//                     </div>
//                     <button className="btn-register text-button" onClick={handleHomeClick}>Daftar</button>
//                     <button className="btn-login text-button" onClick={handleLoginClick}>Masuk</button>
//                     <p className="text-input text-center">atau</p>
//                     <button type='submit' onClick={handleSubmit} className="btn-google">
//                         <div className="flex justify-center gap-2 px-[26px] py-2">
//                             <img src={logoGoogle} alt="logo-google" />
//                             <p className="text-button text-slate-600">Masuk dengan Google</p>
//                         </div>
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default FormRegister

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoGoogle from '../../assets/logos/logos_google-icon.png';
import hidePass from '../../assets/form/mdi_eye-off.png';

// Fungsi untuk hash password (menggunakan Base64 sebagai contoh sederhana)
const hashPassword = (password) => {
    return btoa(password); // Encode password dalam Base64 (untuk demo, lebih baik pakai bcrypt di backend)
};

const FormRegister = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        countryCode: '+62',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    // Fungsi untuk menangani perubahan input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Fungsi untuk menangani submit form
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullname || !formData.email || !formData.phone || !formData.password) {
            alert("Semua field harus diisi!");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Password dan konfirmasi password tidak cocok!");
            return;
        }

        // Ambil data pengguna yang sudah terdaftar
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Cek apakah email sudah terdaftar
        if (users.some(user => user.email === formData.email)) {
            alert("Email sudah terdaftar! Silakan gunakan email lain atau login.");
            return;
        }

        // Simpan data dengan password yang di-hash
        users.push({
            fullname: formData.fullname,
            email: formData.email,
            phone: formData.phone,
            countryCode: formData.countryCode,
            password: hashPassword(formData.password) // Simpan password yang sudah di-hash
        });

        localStorage.setItem('users', JSON.stringify(users));

        alert("Pendaftaran berhasil!");
        navigate("/home"); // Navigasi ke halaman home
    };

    return (
        <div className="flex items-center justify-center w-full">
            <div className='flex flex-col bg-white border-form p-9 rounded-[4px] shadow-lg w-[590px] gap-9'>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-[10px]'>
                        <h3 className="text-center">Pendaftaran Akun</h3>
                        <p className="text-center text-input">Yuk, daftarkan akunmu sekarang juga!</p>
                    </div>

                    <div>
                        <label htmlFor="fullname" className="text-input">Nama Lengkap <span className='text-red-600'>*</span></label>
                        <input type="text" name="fullname" className='input-form' id="fullname" value={formData.fullname} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-input">E-Mail <span className='text-red-600'>*</span></label>
                        <input type="email" name="email" className='input-form' id="email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="phone" className="text-input">No.Hp <span className='text-red-600'>*</span></label>
                        <div className="flex gap-6">
                            <select name="countryCode" id="country" value={formData.countryCode} onChange={handleChange}>
                                <option value="+62">+62 (Indonesia)</option>
                                <option value="+65">+65 (Singapore)</option>
                                <option value="+60">+60 (Malaysia)</option>
                            </select>
                            <input type="tel" name="phone" className='input-form' id="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                    </div>

                    <div className='relative'>
                        <label htmlFor="password" className="text-input">Kata Sandi <span className='text-red-600'>*</span></label>
                        <input type="password" name="password" id="password" className="input-form pr-10" value={formData.password} onChange={handleChange} />
                        <img src={hidePass} alt="hide-password" className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer" />
                    </div>

                    <div className="relative">
                        <label htmlFor="confirmPassword" className="text-input">Konfirmasi Kata Sandi <span className='text-red-600'>*</span></label>
                        <input type="password" name="confirmPassword" id="confirmPassword" className="input-form pr-10" value={formData.confirmPassword} onChange={handleChange} />
                        <img src={hidePass} alt="hide-password" className="absolute right-3 hp:top-7 lg:top-9 cursor-pointer" />
                    </div>

                    <div className="w-full text-right">
                        <a href="#" className="text-home">Lupa Password?</a>
                    </div>

                    <button type="submit" className="btn-register text-button">Daftar</button>

                    <p className="text-input text-center">atau</p>

                    <a href="/login" className="btn-login text-button text-center">Masuk</a>

                    <button type="button" className="btn-google">
                        <div className="flex justify-center gap-2 px-[26px] py-2">
                            <img src={logoGoogle} alt="logo-google" />
                            <p className="text-button text-slate-600">Masuk dengan Google</p>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormRegister;

