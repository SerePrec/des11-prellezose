import faker from "faker";
faker.locale = "es";

function generateMockProduct(id) {
  const product = {
    id,
    title: faker.commerce.product(),
    price: faker.commerce.price(),
    thumbnail: faker.image.imageUrl(100, 100, "any", true)
  };
  return product;
}

export { generateMockProduct };
