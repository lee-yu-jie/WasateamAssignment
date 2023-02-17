# 李宇傑面試作業

## 各頁面簡介

### 組件component
1. :type有三種 text、radio、select
2. 可直接綁定自定義v-modal在component上
3. radio 和 select 使用 :option傳入自定義的選項

### 串接api
1. 使用axios串接api
2. 將api集中管理，使用axios.create()建立一個baseURL以利重複利用
3. 建立一個簡易的table組件，傳入 :tableData 和 :tableHeader 即可渲染資料

### computed 應用
1. 透過前兩個input變動可對 computed 寫入值
2. 最後一個 input 使用setter直接對其他三個input值做更動

## 功能介紹

### title 與 meta-description
使用套件unhead去設置title和description，搭配watch監聽路由變化動態改變title和description
