function Question({ questionText, id }) {
  return (
    <div className="h-full w-full">
      <select className="border-#CBCBCB mt-4 h-[64px] w-full rounded-[8px] border-1 p-4">
        <option key={id}>
          <label
            htmlFor={`question-${id}`}
            className="text-[16px] text-[#74787C]"
          >
            <span className="h-3 w-3 rounded-full bg-[#0182FE]"></span>
            {questionText}
          </label>
        </option>
      </select>
    </div>
  );
}

export default Question;
// function Question({ questionText, id }) {
//   return (
//     <div className="flex flex-col space-y-2">
//       <div className="flex items-center space-x-2"></div>

//       <select
//         id={`question-${id}`}
//         className="h-[64px] w-full rounded-[8px] border border-[#CBCBCB] p-4"
//       >
//         <option>
//           <p className="text-[16px] text-[#74787C]">
//             {` ${(<span className="h-3 w-3 rounded-full bg-[#0182FE]"></span>)} ${questionText} `}
//           </p>
//         </option>
//       </select>
//     </div>
//   );
// }

// export default Question;
