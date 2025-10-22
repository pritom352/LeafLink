import { useState } from "react";
import toast from "react-hot-toast";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddTree = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    size: "",
    category: "",
    location: "",
    description: "",
    contact: "",
    seller: "",
  });

  const [images, setImages] = useState([]); // for multiple image preview

  // handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle image select
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImages(previews);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, images });
    toast.success("Tree added successfully!");
    e.target.reset();
    setImages([]);
  };

  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center py-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-green-100">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          🌿 Add Your Tree for Sale
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Tree Name */}
          <div>
            <label className="block mb-1 font-semibold">Tree Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              className="w-full border border-green-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g. Rose Plant"
            />
          </div>

          {/* Multiple Image Upload */}
          <div>
            <label className="block mb-2 font-semibold">Tree Images</label>
            <div className="border-2 border-dashed border-green-300 rounded-xl p-6 flex flex-col items-center justify-center bg-green-50/40 hover:bg-green-100/50 transition">
              <FaCloudUploadAlt className="text-green-500 text-4xl mb-2" />
              <p className="text-sm text-gray-600 mb-2">
                Drag & drop or click to upload (multiple allowed)
              </p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="imageInput"
              />
              <label
                htmlFor="imageInput"
                className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Choose Images
              </label>
            </div>

            {/* Preview Section */}
            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-4">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-lg overflow-hidden group"
                  >
                    <img
                      src={img}
                      alt={`tree-${idx}`}
                      className="w-full h-24 object-cover rounded-lg shadow-md"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setImages(images.filter((_, i) => i !== idx))
                      }
                      className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Price and Size */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">Price (৳)</label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                required
                className="w-full border border-green-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="e.g. 500"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                Tree Size / Age
              </label>
              <input
                type="text"
                name="size"
                onChange={handleChange}
                className="w-full border border-green-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="e.g. 2 years old"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-semibold">Category</label>
            <select
              name="category"
              onChange={handleChange}
              required
              className="w-full border border-green-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select Category</option>
              <option value="Flower Plant">Flower Plant</option>
              <option value="Fruit Plant">Fruit Plant</option>
              <option value="Indoor Plant">Indoor Plant</option>
              <option value="Outdoor Plant">Outdoor Plant</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-semibold">Location</label>
            <input
              type="text"
              name="location"
              onChange={handleChange}
              required
              className="w-full border border-green-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g. Dhaka, Bangladesh"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-semibold">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              rows="3"
              required
              className="w-full border border-green-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Write a few words about your tree..."
            ></textarea>
          </div>

          {/* Contact and Seller */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">Contact Number</label>
              <input
                type="text"
                name="contact"
                onChange={handleChange}
                required
                className="w-full border border-green-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="e.g. 017xxxxxxxx"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Seller Name</label>
              <input
                type="text"
                name="seller"
                onChange={handleChange}
                className="w-full border border-green-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="e.g. Hasan Ali"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
            >
              Add Tree 🌳
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTree;
