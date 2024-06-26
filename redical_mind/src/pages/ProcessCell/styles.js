const styles = (theme) => {
  return {
    chatConatiner: {
      minHeight: "50vh",
      // maxHeight: "90vh",
      // overflow: "auto",
    },
    ChatConversionBox: {
      // display: "flex",
      flexDirection: "row",
      border: "2px solid lightGrey",
      height: "auto",
      borderRadius: "10px",
      justifyContent: "space-between",
      // position: "relative",
    },
    speakers: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
  };
};

export default styles;
