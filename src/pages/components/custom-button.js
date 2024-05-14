import classes from "@/styles/layout.module.css";

export default function CustomButton({ background, width, height, ...other }) {
  return (
    <button className={classes.button} {...other}>
      <img src={background} height={height} width={width} alt={background} />
    </button>
  );
}
