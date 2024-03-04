import styled from "@emotion/styled";

export const PageContainer = styled.div({
  marginTop: 110,
  display: "flex",
});

export const Sidebar = styled.div({
  border: "1px solid #92979b",
  paddingLeft: 30,
  margin: 20,
  width: "15rem",
  height: "70vh",
});

export const Content = styled.div({
  margin: 20,
  width: "100%",
});

export const TopbarContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "2rem",
});

export const CardGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "10px",
  gridAutoRows: "minmax(100%, auto)",
});

export const CardContainer = styled.div({
  border: "1px solid",
  borderRadius: "5px",
  padding: "10px",
});
