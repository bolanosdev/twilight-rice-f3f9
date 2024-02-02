import { Component } from "react";
import styled from "@emotion/styled";

const PageContainer = styled.div({
  marginTop: 110,
  display: "flex",
});

const Sidebar = styled.div({
  border: "1px solid #92979b",
  paddingLeft: 30,
  margin: 20,
  width: "15rem",
  height: "70vh",
});

const Content = styled.div({
  margin: 20,
  width: "100%",
});

const TopbarContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "2rem",
});

export default class ProductsPage extends Component {
  render() {
    return (
      <PageContainer>
        <Sidebar>
          <div>
            <h3>Categories</h3>
            <div>
              <input name="domestic" type="checkbox" />
              <label>Domestic</label>
            </div>
            <div>
              <input name="exotic" type="checkbox" />
              <label>Exotic</label>
            </div>
            <div>
              <input name="sweet" type="checkbox" />
              <label>Sweet</label>
            </div>
            <div>
              <input name="tangy" type="checkbox" />
              <label>Tangy</label>
            </div>
          </div>
        </Sidebar>
        <Content>
          <TopbarContainer>
            <div>
              <label>Search</label>
              <input name="search" type="search" />
            </div>
            <div>
              <label>Sort By</label>
              <select name="choice">
                <option value="price-lo-hi">Price: Low to High</option>
                <option value="price-hi-lo">Price: High to Low</option>
                <option value="avg-rating">Average Rating</option>
              </select>
            </div>
          </TopbarContainer>
          <div>Product listings go here</div>
        </Content>
      </PageContainer>
    );
  }
}
