let products = [];
window.onload = function () {
  getProducts();
};
const SumPrice = (str = []) => {
  return str
    .reduce((acc, val, index) => {
      return acc + val.price;
    }, 0)
    .toFixed(2);
};
const SumPriceCoupon = (str = []) => {
  return str
    .reduce((acc, val, index) => {
      let discount = 0.5;
      if (index > 12) discount = 1;
      else if (index > 9) discount = 0;
      else if (index > 4) discount = 0.8;
      return acc + val.price * discount;
    }, 0)
    .toFixed(2);
};

const sumMapPrice = (arr = []) => {
  let sum = 0;
  const map = arr.map((elm) => {
    sum += elm.price;
    return sum;
  });
  console.log("🚀 ~ file: controller.js ~ line 26 ~ map ~ map", map);
  return sum;
};

const sumForEachPrice = (arr = []) => {
  let sum = 0;
  arr.forEach((elm) => {
    sum += elm.price;
  });
  return sum;
};

const PriceCouponAndHTML = (str = []) => {
  return str.reduce(
    (acc, val, index) => {
      let discount = 0.5;
      if (index > 12) discount = 1;
      else if (index > 9) discount = 0;
      else if (index > 4) discount = 0.8;
      const newPrice = acc.prices + val.price * discount;
      const newStr =
        acc.str +
        `<tr>
        <td>${val.id}</td>
        <td>${val.category}</td>
        <td>${val.description}</td>
        <td>${val.image}</td>
        <td>${val.price}</td>
        <td>${val.title}</td>
        </tr>`;
      return { str: newStr, prices: newPrice };
    },
    { str: "", prices: 0 }
  );
};

function getProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      const result = PriceCouponAndHTML(json);
      var list = document.getElementById("tr");
      list.outerHTML = result.str;
      console.log("🚀 ~ file: controller.js ~ line 72 ~ .then ~ result", result.prices)
      console.log("🚀 ~ file: controller.js ~ line 72 ~ .then ~ SumPrice",SumPrice(json))
    });
}

// Từ danh sách sản phẩm đã lấy được từ API --- done
// - Tính tổng giá tiền sản phẩm ( tổng chưa tính giảm giá) --- done
// - Tính tổng sản phẩm với:
// -> 5 sản phẩm đầu giảm 50%
// -> 5 sản phẩm sau giảm 20% 5- 9
// -> 2 sản phẩm tiếp giá 0 đồng khi mua 10 sản phẩm 10 - 11
// -> 8 sản phẩm cuối không áp dụng giảm giá 12 -19
