<template>
    <li>
        <input type="checkbox" :checked="checked"> {{ id }} - {{ name }}
    </li>
</template>

<script>
export default {
    // 해당 설계가 가장 이상적인 component props 설계!
    // 가급적 해당 방법으로 component를 설계하길 권장!
    // https://ko.vuejs.org/guide/components/props#prop-validation
    name : "CheckboxItem1",
    // props : 외부에서 받아온 인자(속성값)
    props1: {
        //1. props 기본 선언형
        id: Number,
        name: String,
        checked: Boolean,
        //한번에 여러 type으로 활용할 수 있도록 선언하는 방법
        id2: [Number, String],
    }

    props: {
        //2. 객체 선언형 -> 가장 표준적으로 활용 + 기본 선언형
        id: {
            type: Number,
            required: true
        },
        name: {
            //validator : props의 양식 검사, true로 리턴하면 성공, false로 리턴하면 오류
            validator(v) {
                return typeof(v) !== 'string' ?
                false : v.trim().length >= 4 ? true : false;
            }
        },
        checked: {
            type: Boolean,
            default: false,
            required: true,
        }
    }
}

</script>