import { defineComponent} from "vue";
import { RouterView } from "vue-router";
import s from './Welcome.module.scss'
import logo from '../assets/icons/mangosteen.svg'

export const Welcome = defineComponent({
    setup: (props, context) => {
        return () => <div class={s.wrapper}>
            <header>
                <img src={logo} />
                <h1>山竹记账</h1>
            </header>
            <main class={s.main}>
                <RouterView/>
                {/* <RouterView name="main"/> */}
            </main>
            {/* <footer>
                <RouterView name="footer"/>
            </footer> */
            /* 由于后续代码是直接下载的，这里的bug就不作修改了 */
            }
        </div>;
    }
})