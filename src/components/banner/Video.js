import Image from "./Image";

const Video = function ({ data, videoView }) {
  return (
    <>
      {videoView ? (
        <video
          autoPlay
          loop
          muted="muted"
          src={data.img}
          type="video/mp4"
        ></video>
      ) : (
        <Image src={data.imgSmallScreen} />
      )}
    </>
  );
};
export default Video;
