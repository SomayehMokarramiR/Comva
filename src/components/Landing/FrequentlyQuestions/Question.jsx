function Question({ questionText, id }) {
  return (
    <div className="h-full w-full">
      <select className="border-#CBCBCB mt-4 h-[64px] w-full rounded-[8px] border-1 p-4">
        <option key={id}>
          {/* <ul>
            <li className="marker:text-#0182FE list-disc">{questionText}</li>
          </ul> */}
          {questionText}
        </option>
      </select>
    </div>
  );
}

export default Question;
