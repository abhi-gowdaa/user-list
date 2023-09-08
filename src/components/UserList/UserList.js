import Card from "../Card/Card";
import styles from "./UserList.module.css";
const UserList = (props) => {
  console.log(props)
  return (
    <div > 
      {props.data.map((userData) => (
        <Card className=" " key={Math.random().toString()}>
          <p className={styles["content"]} >
            {userData.name} ( age is {userData.age})
          </p>
        </Card>
      ))}
    </div>
  );
};
export default UserList;
