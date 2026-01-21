// Helper component for rendering image upload slots
const ImageUploadSlot = ({ imageNumber, image, onUpload, inputRef, mode = 'edit' }) => (
    <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700">
            Image {imageNumber} {imageNumber === 1 && <span className="text-red-500">*</span>}
        </label>
        <input
            type="file"
            ref={inputRef}
            onChange={onUpload}
            accept="image/*"
            className="hidden"
        />
        <button
            onClick={() => inputRef.current?.click()}
            className="flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors"
        >
            <Upload size={14} />
            {image ? 'Change' : 'Upload'}
        </button>
        {image && (
            <div className="h-20 w-20 rounded overflow-hidden border-2 border-blue-500">
                <img src={image} alt={`Preview ${imageNumber}`} className="w-full h-full object-cover" />
            </div>
        )}
    </div>
);
