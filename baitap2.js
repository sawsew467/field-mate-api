const PRODUCTS = [
    {
      id: "P001",
      name: "Áo thun nam",
      price: 20,
      quantity: 100,
    },
    {
      id: "P002",
      name: "Áo khoác nữ",
      price: 50,
      quantity: 50,
    },
    {
      id: "P003",
      name: "Quần jeans nam",
      price: 40,
      quantity: 80,
    },
    {
      id: "P004",
      name: "Váy dạ hội nữ",
      price: 80,
      quantity: 30,
    },
    {
      id: "P005",
      name: "Giày thể thao nam",
      price: 60,
      quantity: 70,
    },
    {
      id: "P006",
      name: "Túi xách nữ",
      price: 35,
      quantity: 120,
    },
    {
      id: "P007",
      name: "Áo len nam",
      price: 30,
      quantity: 60,
    },
    {
      id: "P008",
      name: "Đầm công sở nữ",
      price: 45,
      quantity: 40,
    },
    {
      id: "P009",
      name: "Quần jogger nam",
      price: 25,
      quantity: 90,
    },
    {
      id: "P010",
      name: "Áo khoác da nam",
      price: 70,
      quantity: 25,
    },
    {
      id: "P011",
      name: "Áo sơ mi nữ",
      price: 30,
      quantity: 70,
    },
    {
      id: "P012",
      name: "Giày cao gót nữ",
      price: 55,
      quantity: 50,
    },
    {
      id: "P013",
      name: "Quần legging nữ",
      price: 15,
      quantity: 110,
    },
    {
      id: "P014",
      name: "Áo khoác bomber nam",
      price: 45,
      quantity: 35,
    },
    {
      id: "P015",
      name: "Áo len nữ",
      price: 25,
      quantity: 80,
    },
    {
      id: "P016",
      name: "Giày búp bê nữ",
      price: 40,
      quantity: 60,
    },
    {
      id: "P017",
      name: "Quần short nam",
      price: 20,
      quantity: 100,
    },
    {
      id: "P018",
      name: "Áo phông nữ",
      price: 15,
      quantity: 120,
    },
    {
      id: "P019",
      name: "Áo khoác dù nam",
      price: 60,
      quantity: 45,
    },
    {
      id: "P020",
      name: "Đầm dạo phố nữ",
      price: 35,
      quantity: 70,
    },
    {
      id: "P021",
      name: "Quần tây nam",
      price: 30,
      quantity: 85,
    },
    {
      id: "P022",
      name: "Áo cardigan nữ",
      price: 25,
      quantity: 55,
    },
    {
      id: "P023",
      name: "Giày lười nam",
      price: 25,
      quantity: 70,
    },
    {
      id: "P024",
      name: "Váy maxi nữ",
      price: 50,
      quantity: 40,
    },
    {
      id: "P025",
      name: "Áo hoodie nam",
      price: 35,
      quantity: 65,
    },
    {
      id: "P026",
      name: "Áo thể thao nữ",
      price: 30,
      quantity: 75,
    },
    {
      id: "P027",
      name: "Quần culottes nữ",
      price: 20,
      quantity: 90,
    },
    {
      id: "P028",
      name: "Giày thể thao nam",
      price: 55,
      quantity: 60,
    },
    {
      id: "P029",
      name: "Áo khoác nữ",
      price: 40,
      quantity: 50,
    },
    {
      id: "P030",
      name: "Quần jeans nam",
      price: 30,
      quantity: 75,
    },
  ];
  
// Cho một mảng products chứa các đối tượng sản phẩm với thông tin sau:
//   id (chuỗi): Mã sản phẩm.
//   name (chuỗi): Tên sản phẩm.
//   price (số): Giá sản phẩm (đơn vị: đô la).
//   quantity (số): Số lượng tồn kho hiện tại.

// Thực hiện các yêu cầu sau:
// 1. Tính tổng giá trị tồn kho (số lượng * giá) của tất cả sản phẩm.
// 2. Liệt kê danh sách các sản phẩm có số lượng tồn kho dưới 60 cái.
// 3. Sắp xếp và liệt kê danh sách sản phẩm theo thứ tự giảm dần của giá bán.
// 6. Thêm một thuộc tính discount cho sản phẩm có giá trị giảm giá (tính theo phần trăm). 
// 7. Tạo một danh sách mới discountedProducts chứa các sản phẩm được giảm giá với thông tin: name, price, discountedPrice.
// 8. Tính tổng giá trị tồn kho sau khi đã áp dụng giảm giá.