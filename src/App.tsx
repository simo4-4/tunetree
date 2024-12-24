import { useState } from "react";

interface BoxProps {
  content: string;
  className?: string;
  onClick?: () => void;
}

const Box = ({ content, className, onClick }: BoxProps) => {
  return (
    <div
      className={`flex items-center justify-center w-40 h-40 bg-fuchsia-100 border-black border-2 rounded-md shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-lg text-4xl text-gray-600 ${className}`}
      onClick={onClick}
      role="button"
      aria-label={content}
    >
      {content}
    </div>
  );
};

const App = () => {
  const [boxes, setBoxes] = useState([
    { id: 1, content: "+" },
    { id: 2, content: "+" },
    { id: 3, content: "+" },
    { id: 4, content: "+" },
    { id: 5, content: "+" },
    { id: 6, content: "+" },
  ]);

  return (
    <div className="flex flex-col items-center p-4 bg-fuchsia-200 h-screen">
      {boxes
        .reduce((rows, box, index) => {
          if (index % 2 === 0) {
            rows.push([box]);
          } else {
            rows[rows.length - 1].push(box);
          }
          return rows;
        }, [])
        .map((row, index) => (
          <div key={index} className="flex justify-center gap-4 mb-4">
            {row.map((box) => (
              <Box key={box.id} content={box.content} />
            ))}
          </div>
        ))}
    </div>
  );
};

export default App;
