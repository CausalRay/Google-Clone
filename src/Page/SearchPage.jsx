import React from "react";
import "./SearchPage.css";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "../UseGoogleSearch";
import Response from "../components/Response";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const {data} = UseGoogleSearch(term)



  return (
    <div className="searchpage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__header--body">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="options__left">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/search">All</Link>
              </div>

              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>

              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>

              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>

              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>

            <div className="options__right">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>

              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__result--count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result" >
              <a
                className="searchPage__result--link"
                href={item.link}
                target="_blank"
              >
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__result--image"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink}
              </a>

              <a
                className="searchPage__result--title"
                href={item.link}
                target="_blank"
                >
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__result--snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
