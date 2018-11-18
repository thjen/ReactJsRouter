import React, { Component } from 'react';
import {NavLink, Route} from "react-router-dom";
import InfoProduct from "./InfoProduct";

class Products extends Component {
  render() {
    var products = [
      {
        "id": "5377e76b-f4b5-4daf-822b-12b63cde7c5b",
        "name": "Cheese - Manchego, Spanish",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et"
      },
      {
        "id": "626da5ca-85cf-4511-9df7-0cd27ee1c714",
        "name": "Soup - Campbells Asian Noodle",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante"
      },
      {
        "id": "bab62dc5-009c-4556-bdcc-3f6948fa04d6",
        "name": "Cup - 6oz, Foam",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis"
      },
      {
        "id": "f5a2748f-0b0c-4bc6-9848-7466f992e350",
        "name": "Towel - Roll White",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum"
      },
      {
        "id": "1447178a-97f2-4924-a04c-2e2d8da1f478",
        "name": "Smoked Paprika",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec"
      },
      {
        "id": "28b6876e-3c9b-4f04-9415-0dd8cafb3ab9",
        "name": "Lobster - Base",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non"
      },
      {
        "id": "e96609b6-bcff-4542-bfdc-25a0e2cdec0e",
        "name": "Wine - Soave Folonari",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus"
      },
      {
        "id": "8a2e2e63-a80c-471b-8c19-4386ee4ffeba",
        "name": "Mushroom - Enoki, Dry",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem"
      },
      {
        "id": "00000548-28ac-4ec1-9224-f851733efe67",
        "name": "Island Oasis - Cappucino Mix",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis"
      },
      {
        "id": "06494122-7594-445a-8225-ea8661060446",
        "name": "Bread - Crumbs, Bulk",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum"
      },
      {
        "id": "4a1ef0cb-2e55-4a55-8d2a-f4d42e0aa75a",
        "name": "Ice Cream - Fudge Bars",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean"
      },
      {
        "id": "3c062f6c-734b-4e66-bc05-e155aa49df33",
        "name": "Pork - Bacon,back Peameal",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis"
      },
      {
        "id": "6f3a7fca-8054-4b30-ba2d-979e5ec9be31",
        "name": "Cheese - Parmesan Grated",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non"
      },
      {
        "id": "1a047a23-e6fa-47f2-8ec8-f1080ad119a6",
        "name": "Greens Mustard",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in"
      },
      {
        "id": "22454ff7-0489-4e01-bde1-cd1c4085474b",
        "name": "Creme De Banane - Marie",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis"
      },
      {
        "id": "bcbbbd82-eb3a-44cb-88e3-89b86a2efd5e",
        "name": "Bread - Dark Rye, Loaf",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id"
      },
      {
        "id": "64cca563-5c96-41f1-9f9c-865168d7f86a",
        "name": "Pie Filling - Cherry",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris"
      },
      {
        "id": "6c22e797-d370-43ca-9fdb-ee41b607fbf7",
        "name": "Shrimp - Black Tiger 13/15",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis"
      },
      {
        "id": "4a7b098f-3d3d-44ae-9f37-cb35912de00a",
        "name": "Cup - 3.5oz, Foam",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum"
      },
      {
        "id": "bc8d1aa9-f69b-4aa7-abf8-b05075b56d33",
        "name": "Rappini - Andy Boy",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in"
      },
      {
        "id": "1998560f-99b0-48a4-8642-ba7496132da1",
        "name": "Wine - Muscadet Sur Lie",
        "image": "https://cdn-images-1.medium.com/max/1200/1*K0a7xINk0RM5gfXGSN68cw.png",
        "description": "turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien"
      }
    ];
    var match = this.props.match;
    var url = match.url;
    console.log(match);

    var location = this.props.location;
    console.log(location);

    return (
      <div className="container">
        <h1 style={{textAlign: "center"}}>List producs</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul className="list-group">
              {products.map((element, index) => {
                return (
                  <NavLink to={`${url}/${element.id}`} key={index}>
                    <li className="list-group-item text-center">
                      {element.name}
                    </li>
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Route path="/products/:id" component={InfoProduct} />
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
