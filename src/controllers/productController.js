// Read Product
const readFunc = async (req, res) => {};

// Read Product Detail
const readFuncDetail = async (req, res) => {};

// Create Product
// const uploadCloudinaryList = async (valueImage, folderStorage) => {
//   const uploadImageLists = [];
//   for (let i = 0; i < valueImage.length; ++i) {
//     const uploadImageItem = await cloudinary.uploader.upload(valueImage[i], {
//       folder: folderStorage,
//     });
//     uploadImageLists.push(uploadImageItem.secure_url);
//   }
//   return uploadImageLists;
// };

const createFunc = async (req, res) => {};

// Update Product
const updateFunc = async (req, res) => {};

// Delete Product
const deleteFunc = async (req, res) => {};

module.exports = {
  readFunc,
  readFuncDetail,
  createFunc,
  updateFunc,
  deleteFunc,
};
