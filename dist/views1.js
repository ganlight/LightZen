<style>
    .index-page {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .index-page .page-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .index-page .list-item {
        list-style: none;
        padding: 10px 15px;
        border-bottom: 1px solid #eee;
    }
    .index-page .list-item .name{
        padding-bottom: 5px;
    }
</style>
<div class="zen-page index-page" v-script="views/front/js/index.js">
    <ul class="page-list" id="page-list">
    </ul>
    <div class="page-template hide">
        <li class="list-item inline clearfix">
            <div class="font20 name"></div>
            <div class="font16 gray href action"></div>
        </li>
    </div>
</div>
