export default function TemplateSelector({ onSelect }) {
               return (
    <div>
                  <h2 className="text-xl font-semibold mb-4 text-center ">Choose Template</h2>
      <div className="grid grid-cols-1 gap-6">
                       <div onClick={() => onSelect("templat1")} className="cursor-pointer rounded-lg p-4 bg-white shadow hover:scale-105 transition">
          <div className="h-36 bg-gradient-to-br from-yellow-100 to-blue-200 rounded mb-3 flex items-center justify-center text-white font-bold">Template 1</div>
                            <p className="text-center">Light Theme</p></div>
<div onClick={() => onSelect("templat2")} className="cursor-pointer rounded-lg p-4 bg-white shadow hover:scale-105 transition">
          <div className="h-36 bg-gradient-to-br from-rose-900 to-rose-900 rounded mb-3 flex items-center justify-center text-white font-bold">Template 2</div>
                         <p className="text-center">Dark Theme</p></div></div>
    </div>
  );
}
