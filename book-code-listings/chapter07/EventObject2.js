function LogInput() {
  const logChange = (e) => {
    console.dir(e);
  };
  return (
    <>
      <input
        onChange={(e) => {
          logChange(e);
        }}
      />
      
    </>
  );
}

export default LogInput;
