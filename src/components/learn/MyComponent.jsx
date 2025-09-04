
import './style.css';
const MyComponent = () => {
    const hoidanit = "eric" // Có thể sử dụng với những dữ liệu khác 
    // Có thể dùng với mảng (Sử dụng stringify để in ra)
    // Có thể dùng với object
    const hoidanit1 = {
        name: "hoidanit",
        age: 25
    } // Ở dưới sử dụng stringify để xuất toàn bộ object hoặc có thể xuất riêng lẻ VD: hoidanit.name
    return (
        <>
            <div>{JSON.stringify(hoidanit1)} update</div>
            <div className='child'
                style={{
                    borderRadius: "10px"
                }}
            >hoidanit</div>
        </>
    );
    // Nguyên tắc : sử dụng cặp dấu ngoặc nhọn {} để viết code javascript bên trong html
}

export default MyComponent;