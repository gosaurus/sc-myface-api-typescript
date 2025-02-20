import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import App from './App';
import { Posts } from './components/Posts';
import { UserDetails } from './components/UserDetails';
import { CreateUser } from './components/CreateUser';

describe("App", () => {
  beforeEach(() => {
    const mockedResponse = {
        "results": [
          {
            "id": 130,
            "message": "Operative system-worthy synergy",
            "imageUrl": "https://picsum.photos/id/158/600",
            "createdAt": "2021-01-27 21:55:56",
            "postedBy": {
              "id": 3,
              "name": "Valry Gregory",
              "username": "vgregory2",
              "email": "vgregory2@wsj.com",
              "profileImageUrl": "https://robohash.org/vgregory2.png?bgset=bg1",
              "coverImageUrl": "https://picsum.photos/id/692/2100/800"
            },
            "likedBy": [],
            "dislikedBy": []
          },
          {
            "id": 79,
            "message": "Implemented bifurcated infrastructure",
            "imageUrl": "https://picsum.photos/id/435/600",
            "createdAt": "2021-01-27 21:44:04",
            "postedBy": {
              "id": 16,
              "name": "Juline Ainscow",
              "username": "jainscowf",
              "email": "jainscowf@homestead.com",
              "profileImageUrl": "https://robohash.org/jainscowf.png?bgset=bg1",
              "coverImageUrl": "https://picsum.photos/id/547/2100/800"
            },
            "likedBy": [
              {
                "id": 83,
                "name": "Alexander Steinhammer",
                "username": "asteinhammer2a",
                "email": "asteinhammer2a@eepurl.com",
                "profileImageUrl": "https://robohash.org/asteinhammer2a.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/97/2100/800"
              },
              {
                "id": 42,
                "name": "Carolann Haeslier",
                "username": "chaeslier15",
                "email": "chaeslier15@webmd.com",
                "profileImageUrl": "https://robohash.org/chaeslier15.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/486/2100/800"
              },
              {
                "id": 30,
                "name": "Clyde Holme",
                "username": "cholmet",
                "email": "cholmet@usatoday.com",
                "profileImageUrl": "https://robohash.org/cholmet.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/826/2100/800"
              },
              {
                "id": 99,
                "name": "Cortney McKie",
                "username": "cmckie2q",
                "email": "cmckie2q@qq.com",
                "profileImageUrl": "https://robohash.org/cmckie2q.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/894/2100/800"
              },
              {
                "id": 49,
                "name": "Darell Grafham",
                "username": "dgrafham1c",
                "email": "dgrafham1c@quantcast.com",
                "profileImageUrl": "https://robohash.org/dgrafham1c.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/834/2100/800"
              },
              {
                "id": 65,
                "name": "Had Muxworthy",
                "username": "hmuxworthy1s",
                "email": "hmuxworthy1s@deviantart.com",
                "profileImageUrl": "https://robohash.org/hmuxworthy1s.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/705/2100/800"
              },
              {
                "id": 55,
                "name": "Hermia Sebrook",
                "username": "hsebrook1i",
                "email": "hsebrook1i@storify.com",
                "profileImageUrl": "https://robohash.org/hsebrook1i.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/921/2100/800"
              },
              {
                "id": 38,
                "name": "Iolande Grichukhanov",
                "username": "igrichukhanov11",
                "email": "igrichukhanov11@hugedomains.com",
                "profileImageUrl": "https://robohash.org/igrichukhanov11.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/851/2100/800"
              },
              {
                "id": 16,
                "name": "Juline Ainscow",
                "username": "jainscowf",
                "email": "jainscowf@homestead.com",
                "profileImageUrl": "https://robohash.org/jainscowf.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/547/2100/800"
              },
              {
                "id": 92,
                "name": "Jessamine Pennino",
                "username": "jpennino2j",
                "email": "jpennino2j@goo.ne.jp",
                "profileImageUrl": "https://robohash.org/jpennino2j.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/946/2100/800"
              }
            ],
            "dislikedBy": [
              {
                "id": 48,
                "name": "Annemarie Iashvili",
                "username": "aiashvili1b",
                "email": "aiashvili1b@fastcompany.com",
                "profileImageUrl": "https://robohash.org/aiashvili1b.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/47/2100/800"
              },
              {
                "id": 35,
                "name": "Gena Esley",
                "username": "gesleyy",
                "email": "gesleyy@hatena.ne.jp",
                "profileImageUrl": "https://robohash.org/gesleyy.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/329/2100/800"
              },
              {
                "id": 32,
                "name": "Louise Asbrey",
                "username": "lasbreyv",
                "email": "lasbreyv@nps.gov",
                "profileImageUrl": "https://robohash.org/lasbreyv.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/109/2100/800"
              },
              {
                "id": 74,
                "name": "Mahala Pharro",
                "username": "mpharro21",
                "email": "mpharro21@nba.com",
                "profileImageUrl": "https://robohash.org/mpharro21.png?bgset=bg1",
                "coverImageUrl": "https://picsum.photos/id/351/2100/800"
              }
            ]
          }
        ]
    };
    
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockedResponse),
    });
  });   

  it("renders header text", async () => {
    const { getByText } = render(<App />);

    await waitFor(() => {
      const textElement = getByText(/myFace/i);
      expect(textElement).toBeVisible();
    });
  });
});

describe("Post list component", () => {
  beforeEach(() => {
    const mockedResponse = {
        "results": [
          {
            "id": 130,
            "message": "Operative system-worthy synergy",
            "imageUrl": "https://picsum.photos/id/158/600",
            "createdAt": "2021-01-27 21:55:56",
            "postedBy": {
              "id": 3,
              "name": "Valry Gregory",
              "username": "vgregory2",
              "email": "vgregory2@wsj.com",
              "profileImageUrl": "https://robohash.org/vgregory2.png?bgset=bg1",
              "coverImageUrl": "https://picsum.photos/id/692/2100/800"
            },
          },
          {
            "id": 79,
            "message": "Implemented bifurcated infrastructure",
            "imageUrl": "https://picsum.photos/id/435/600",
            "createdAt": "2021-01-27 21:44:04",
            "postedBy": {
              "id": 16,
              "name": "Juline Ainscow",
              "username": "jainscowf",
              "email": "jainscowf@homestead.com",
              "profileImageUrl": "https://robohash.org/jainscowf.png?bgset=bg1",
              "coverImageUrl": "https://picsum.photos/id/547/2100/800"
            },
          },
          {
            "id": 796,
            "message": "profit-focused full-range migration",
            "imageurl": "https://picsum.photos/id/472/600",
            "createdat": "2021-01-27 19:12:57",
            "postedby": {
              "id": 42,
              "name": "carolann haeslier",
              "username": "chaeslier15",
              "email": "chaeslier15@webmd.com",
              "profileimageurl": "https://robohash.org/chaeslier15.png?bgset=bg1",
              "coverimageurl": "https://picsum.photos/id/486/2100/800"
            },
          },
          {
            "id": 161,
            "message": "Re-engineered 6th generation info-mediaries",
            "imageUrl": "https://picsum.photos/id/633/600",
            "createdAt": "2021-01-26 18:12:57",
            "postedBy": {
              "id": 6,
              "name": "Ricky Giacobazzi",
              "username": "rgiacobazzi5",
              "email": "rgiacobazzi5@jigsy.com",
              "profileImageUrl": "https://robohash.org/rgiacobazzi5.png?bgset=bg1",
              "coverImageUrl": "https://picsum.photos/id/259/2100/800"
            },
          },
        ]
    };
   
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockedResponse),
      status: true,
      ok: true,
    });
  });   
  
  it("renders posts on page load", async () => {
    render(<Posts />);
    await waitFor(() => {
      const postList = screen.getByTestId("postList");
      expect(postList).toBeVisible();
      expect(postList.childNodes.length).toBe(4);
    });
  });
});

describe("App router", () => {
  beforeEach(() => {
  const mockedResponse = {
      "id": 2,
      "name": "Valeria Egdal",
      "username": "vegdal1",
      "email": "vegdal1@independent.co.uk",
      "coverImageUrl": "https://picsum.photos/id/283/2100/800",
      "profileImageUrl": "https://robohash.org/vegdal1.png?bgset=bg1",
      "posts": [
        {
          "id": 181,
          "message": "Centralized reciprocal challenge",
          "imageUrl": "https://picsum.photos/id/145/600",
          "createdAt": "2021-01-08 05:18:05",
          "userId": 2
        },
        {
          "id": 935,
          "message": "Distributed grid-enabled productivity",
          "imageUrl": "https://picsum.photos/id/744/600",
          "createdAt": "2020-10-24 20:34:26",
          "userId": 2
        },
        {
          "id": 242,
          "message": "Balanced composite solution",
          "imageUrl": "https://picsum.photos/id/510/600",
          "createdAt": "2020-05-29 23:31:07",
          "userId": 2
        },
        {
          "id": 41,
          "message": "Versatile demand-driven strategy",
          "imageUrl": "https://picsum.photos/id/546/600",
          "createdAt": "2020-03-05 21:55:01",
          "userId": 2
        }
      ],
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockedResponse),
    })
  });

  it.only("renders correct user details page at 'user/:userId' ", async () => {
    render(
    <Router initialEntries={["/users/2"]}>
      <Routes>
        <Route path="/users/:userId" element={<UserDetails />}/>
      </Routes>
    </Router>
    );
    render(<UserDetails />)
    await waitFor(() => {
      const textElement = screen.getAllByRole("heading");
      expect(textElement[0]).toHaveTextContent("Valeria Egdal");
    })
  })
})
