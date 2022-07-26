import mealsImage from '../../../assets/meals.jpg'
import cls from './Header.module.css'
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton'

const Header = props => {
  return (
    <>
      <header className={cls.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={cls.mainImage}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  )
}

export default Header