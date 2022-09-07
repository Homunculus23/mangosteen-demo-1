import { defineComponent , ref } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
    setup(){
        return () => <>
             <header>导航
                <ul>
                <li>
                    <router-link to="/">Foo</router-link>
                </li>
                <li>
                    <router-link to="/about">Bar</router-link>
                </li>
                </ul> 
            </header>
            <div>
                <RouterView />
            </div>
            <footer>页脚</footer>
        </>
    }
})


//以下代码由于未知原因无法运行，暂时备案，以后研究或询问
// export const App = defineComponent({
//     setup(){
//         const refCount = ref(0)
//         const onClick = () => {
//             refCount.value += 1
//         }
//         return () =>
//         <>
//             <div>
//                 {refCount.value}
//             </div>
//             <div>
//                 <button onClick={onClick}>+1</button>
//             </div>
//         </>
//     }
// })