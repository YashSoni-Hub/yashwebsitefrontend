import React, { useEffect } from "react";
import * as THREE from "three";
import spaceImage from "../../Images/space.jpg";
import venusImage from "../../Images/venus.jpg";
import moonImage from "../../Images/moon.jpg";
import { BoxGeometry } from "three";
import { Typography } from "@mui/material";
import "./style.css";
import TimeLine from "../TimeLine/TimeLine";
import {
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiIonic,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiJavascript,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import Footer from "../Footer/Footer";

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);
  }, []);
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    // const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    // scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      // if (window.scrollY > 1500) {
      //   skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      // } else {
      //   skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      // }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeContainer">
        <Typography varient="h3">Timeline</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">Skills</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img
              src="https://roufid.com/wp-content/uploads/2019/02/1024.png"
              alt="face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              src="https://www.aalpha.net/wp-content/uploads/2020/01/ionic.png"
              alt="face2"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
              alt="face3"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt="face4"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/07/express-logo.png"
              alt="face5"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              src="https://www.ictdemy.com/images/5728/mdb.png"
              alt="face6"
            />
          </div>
        </div>

        <div className="cubeShadow"></div>
        <div className="homeSkillBox">
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiReact />
          <SiAngular />
          <SiExpress />
          <SiNodedotjs />
          <SiMongodb />
        </div>
      </div>
      <div className="homeYoutube">
        <Typography variant="h3">Work History</Typography>
        <div className="homeYoutubeWrapper">
          <YoutubeCard
            image={
              "https://media.istockphoto.com/photos/gadisar-lake-at-jaisalmer-rajasthan-at-sunrise-with-ancient-temples-picture-id942152278?k=20&m=942152278&s=612x612&w=0&h=1MzZ25kI1hXfvqFrSo0gqLKRnr8si49JKvHP0f5nNiM="
            }
            title="FargoWiz Ltd"
            position="Full Stack Developer"
          />
          {/* <YoutubeCard
            image={
              "https://media.istockphoto.com/photos/gadisar-lake-at-jaisalmer-rajasthan-at-sunrise-with-ancient-temples-picture-id942152278?k=20&m=942152278&s=612x612&w=0&h=1MzZ25kI1hXfvqFrSo0gqLKRnr8si49JKvHP0f5nNiM="
            }
            title="Superman"
          /> */}
          {/* <YoutubeCard
            image={
              "https://media.istockphoto.com/photos/gadisar-lake-at-jaisalmer-rajasthan-at-sunrise-with-ancient-temples-picture-id942152278?k=20&m=942152278&s=612x612&w=0&h=1MzZ25kI1hXfvqFrSo0gqLKRnr8si49JKvHP0f5nNiM="
            }
            title="Superman"
          /> */}
          {/* <YoutubeCard
            image={
              "https://media.istockphoto.com/photos/gadisar-lake-at-jaisalmer-rajasthan-at-sunrise-with-ancient-temples-picture-id942152278?k=20&m=942152278&s=612x612&w=0&h=1MzZ25kI1hXfvqFrSo0gqLKRnr8si49JKvHP0f5nNiM="
            }
            title="Superman"
          /> */}
        </div>
      </div>
      <div>{/* <Footer /> */}</div>
    </div>
  );
};

export default Home;
