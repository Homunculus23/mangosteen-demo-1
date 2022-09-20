import { defineComponent } from "vue";
import s from './WelcomeLayout.module.scss';

export const WelcomeLayout = defineComponent({
    setup: (props, context) => {
        const {slots} = context;//slots就是一个对象，只不过每个插槽都是函数，定义的时候将其变为函数（本句存疑）
        return () => (
            <div class={s.wrapper}>
                <div class={s.card}>
                    {slots.icon?.()}
                    {slots.title?.()}
                </div>
                <div className={s.actions}>
                    {slots.buttons?.()}
                </div>
            </div>
        );
    }
})

// 无法使用的新格式--似乎在前端篇的jsx格式里无法运行？
// export const WelcomeLayout: FunctionalComponent = (props, context) => {
//     const { slots: { icon, title, buttons } } = context
//     return (
//       <div class={s.wrapper}>
//         <div class={s.card}>
//           {icon?.()}
//           {title?.()}
//         </div>
//         <div class={s.actions}>
//           {buttons?.()}
//         </div>
//       </div>
//     )
//   }

// WelcomeLayout.display = 'WelcomeLayout'