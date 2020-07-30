# px/%/em/rem/vw/vh
1. em是相对于它自身的字体大小来按比例缩放的，如：
```
    font-size: 12px;
    width: 2em;   //就相当于24px
```
2. rem是相对与html中的字体大小来按比例缩放的
```
    htm{
        font-size: 12px;
    }
    .class{
       width: 2rem;   //就相当于24px
    }
```
3. vw和vh都为viewport视窗的宽和高