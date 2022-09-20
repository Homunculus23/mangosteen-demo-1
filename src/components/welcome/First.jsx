import s from './WelcomeLayout.module.scss';
import pig from '../../assets/icons/pig.svg';
import { WelcomeLayout } from './WelcomeLayout';
import { RouterLink } from "vue-router";

export const First = () => (
    <WelcomeLayout>
        {{
            icon: ()=><img src={pig}/>,
            title: ()=><h2>会挣钱<br/>还会省钱</h2>,
            buttons: ()=> <>
                <RouterLink class={s.fake} to="/start">跳过</RouterLink>
                <RouterLink to="/welcome/2">下一页</RouterLink>
                <RouterLink to="/start">跳过</RouterLink>
            </>
        }}
    </WelcomeLayout>
)

First.displayName = 'First'

// {    //被摈弃的旧格式
//     const slots = { //插槽的定义和使用都需要以函数的模式
//         icon: ()=> <img src={pig}/>,
//         title: ()=><h2>会挣钱<br/>还会省钱</h2>,
//         buttons: ()=><>
//             <RouterLink class={s.fake} to="/start">跳过</RouterLink>
//             <RouterLink to="/welcome/2">下一页</RouterLink>
//             <RouterLink to="/start">跳过</RouterLink>
//         </>
//     }
//     //First和后续三个页面此处格式不同
//     return <WelcomeLayout v-slots={slots}></WelcomeLayout>
// }