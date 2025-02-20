import { useTheme } from "../../hooks/use-theme";
import profileimages from "../../assets/profile-image.jpg"
import { Link } from "react-router-dom";

const ViewProfile = () => {
  const theme = useTheme();

  return (
    <div className={`min-h-screen p-6 ${theme === "dark" ? "bg-black text-white" : ""}`}>
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center">
          <img src={profileimages} alt="Profile" className="w-32 h-32 rounded-full shadow-lg mb-4" />
          <h1 className="text-2xl font-bold">Nguyễn Văn A</h1>
          <p>Full-Stack Developer</p>
        </div>

        <div className="mt-6 border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Thông tin cá nhân</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p><span className="font-semibold">Email:</span> nguyenvana@email.com</p>
            <p><span className="font-semibold">Số điện thoại:</span> 0123-456-789</p>
            <p><span className="font-semibold">Địa chỉ:</span> Hà Nội, Việt Nam</p>
            <p><span className="font-semibold">Ngày tham gia:</span> 01/01/2024</p>
          </div>
        </div>

        <div className="mt-6 border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Cài đặt tài khoản</h2>
          <Link to={"/change-profile"} className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
            Chỉnh sửa hồ sơ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
