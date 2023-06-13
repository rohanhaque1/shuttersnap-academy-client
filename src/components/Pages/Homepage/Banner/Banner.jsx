import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);
import Container from "../../../Shared/Container/Container";

const Banner = () => {
  return (
    <div>
      <Container>
        <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
          <div data-src="https://img.freepik.com/premium-photo/woman-taking-photo-forest-with-camera_771703-5606.jpg?w=1060"></div>
          <div data-src="https://img.freepik.com/premium-photo/river-stone-tree-with-sky-cloud-colorful-stone-river-tree-leaf-forest_37803-719.jpg?w=900"></div>
          <div data-src="https://img.freepik.com/premium-photo/that-coast-is-located-tuy-phong_42481-5.jpg?w=900"></div>
          <div data-src="https://img.freepik.com/free-photo/selective-focus-shot-brown-leaves-tree-branch-maksimir-park-zagreb-croatia_181624-24554.jpg?w=900&t=st=1686125845~exp=1686126445~hmac=985a3d55fd577001ef6551b0e0f49ee0b20cc10c66f043098d2dba64a9f70f9c"></div>
          <div data-src="https://img.freepik.com/premium-photo/woman-using-dslr-camera-taking-flower-park_55877-213.jpg?w=900"></div>
          <div data-src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?w=900&t=st=1686125890~exp=1686126490~hmac=e150525911de85ef3559785bb2d24c70a8a4d2a194ea56c97036252ff7ac0894"></div>
          <div data-src="https://img.freepik.com/premium-photo/lake-mountains-beauty-world-italy-europe_146671-11707.jpg?w=900"></div>
          <div data-src="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?w=900&t=st=1686125871~exp=1686126471~hmac=4915f952b34d42c66afec062acc9885a9fe2600b48b0a91c5cbeda7bf5edd69f"></div>
        </AutoplaySlider>
      </Container>
    </div>
  );
};

export default Banner;
