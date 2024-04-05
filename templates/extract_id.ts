export const promptTemplate = `これから示すのは、ある医学生の月曜日から金曜日までの臨床実習記録と、医学生が臨床実習中に経験すべき目標を示します。

まず目標を示します。

# 目標

## 目標: 疾患

id,項目
JlvnmL0,1型糖尿病
JlvnmL8,2型糖尿病
JlvnmMA,糖尿病ケトアシドーシス
JlvnmMI,高血糖高浸透圧症候群
JlvnmMU,糖尿病性網膜症
JlvnmMY,糖尿病性腎症
JlvnmMg,糖尿病性神経障害
JlvnmMk,足病変
JlvnmMw,脂質異常症
JlvnmNE,高尿酸血症・痛風
JlvnmNs,結膜炎・角膜炎
JlvnmN4,白内障
JlvnmN8,緑内障
JlvnmOQ,糖尿病・高血圧による眼底変化（糖尿病網膜症など）
JlvnmO0,中耳炎（急性・慢性・滲出性・真珠腫性）
JlvnmPg,良性発作性頭位めまい症
JlvnmPo,Ménière病
JlvnmP0,鼻出血
JlvnmP4,副鼻腔炎（急性・慢性）
JlvnmQA,アレルギー性鼻炎
JlvnmQU,咽頭炎
JlvnmQM,扁桃炎
JlvnmTI,頸部リンパ節転移等
JlvnmT0,うつ病
JlvnmT4,双極性障害（躁うつ病）
JlvnmUA,統合失調症
JlvnmUY,身体症状症（身体化障害・疼痛性障害・心気症）
JlvnmTU,認知症
JmxLo0Y,関節リウマチ
JmxLo0g,全身性エリテマトーデス（SLE）及び合併症（中枢神経ループス、ループス腎炎、抗リン脂質抗体症候群）
JlvnmWs,IgA血管炎
JlvnmW0,川崎病
JmxLo1A,後天性免疫不全症（AIDS）
JlvnmXE,髄膜脳炎
JlvnmXY,血流感染・感染性心内膜炎
JlvnmXc,肺炎（定型・非定型）
JlvnmXo,膀胱炎・腎盂腎炎
JlvnmX4,血管内留置カテーテル関連感染
JlvnmX8,尿路カテーテル感染
JlvnmYI,手術部位感染
JlvnmaE,急性白血病
JlvnmcI,肺癌
Jlvnmcg,食道癌
Jlvnmco,胃癌
Jlvnmc0,大腸癌
JlvnmdA,原発性肝癌
JlvnmdQ,膵癌
JlvnmdY,腎癌
Jlvnmdg,腎盂尿管癌・膀胱癌
Jlvnmdk,前立腺癌
Jlvnmdw,子宮頸癌
Jlvnmd4,子宮体癌（子宮内膜癌）
JlvnmeA,卵巣腫瘍
JlvnmeQ,原発性乳癌

## 目標: 主要症候

id,項目
JlAK6lk,発熱
JlAK6lo,全身倦怠感
JlAK6ls,食思(欲)不振
JlAK6lw,体重減少
JlAK6l0,体重増加
JlAK6l4,意識障害
JlAK6l8,失神
JlAK6mA,けいれん
JlAK6mE,めまい
JlAK6mI,浮腫
JlAK6mM,発疹
JlAK6mQ,咳・痰
JlAK6mU,血痰・喀血
JlAK6mY,呼吸困難
JlAK6mc,胸痛
JlAK6mg,動悸
JlAK6mk,嚥下困難
JlAK6mo,腹痛
JlAK6ms,悪心・嘔吐
JlAK6mw,吐血
JlAK6m0,下血
JlAK6m4,便秘
JlAK6m8,下痢
JlAK6nA,黄疸
JlAK6nE,腹部膨隆・腫瘤
JlAK6nI,リンパ節腫脹
JlAK6nM,尿量・排尿の異常
JlAK6nQ,血尿
JlAK6nU,月経異常
JlAK6nY,不安・抑うつ
JlAK6nc,認知機能障害
JlAK6ng,頭痛
JlAK6nk,運動麻痺・筋力低下
JlAK6no,歩行障害
JlAK6ns,感覚障害
JlAK6nw,腰背部痛
JlAK6n0,関節痛・関節腫脹

## 目標: 主要な臨床・画像検査

id,項目
JkxirwY,血算
Jli6WW4,生化学検査
Jli6WW8,凝固・線溶検査
Jli6WXE,免疫血清学検査
Jli6WXI,尿検査
Jli6WXQ,便検査
Jkxir08,血液型（ABO、RhD）検査、血液交差適合（クロスマッチ）試験、不規則抗体検査
JkxirxY,動脈血ガス分析
Jkxiryk,妊娠反応検査
JkxirxU,細菌学検査（細菌の塗抹、培養、同定、薬剤感受性試験）
Jkxirxc,脳脊髄液
Jli6TOw,胸水検査
Jli6TO0,腹水検査
Jkxirwk,病理組織検査や細胞診検査（術中迅速診断を含む）
Jkxirwg,遺伝子関連・染色体検査
JkxirxQ,心電図
Jli6Y7U,呼吸機能検査
Jli6Y7Y,内分泌・代謝機能検査
Jli6Y7c,脳波検査
JkxirxA,超音波検査
Jkxirw4,エックス線撮影
Jli6aBM,CT検査
Jli6aBU,MRI検査
Jkxirxk,核医学検査
Jkxirw8,内視鏡検査


## 目標: 基本的臨床手技

id,項目
JlAKx_k,体位交換、移送
Jub5cSY,皮膚消毒
Jub5cSc,外用薬の貼付・塗布
JlAKx_s,気道内吸引
Jub5dh8,ネブライザー
JlAKx_w,静脈採血
JlAKx_0,末梢静脈の血管確保
JlAKyAA,胃管の挿入と抜去
JlAKyAE,尿道カテーテルの挿入と抜去
JlAKyAI,皮内注射
JlAKyAQ,皮下注射
JlAKyAU,筋肉注射
JlAKyAY,静脈内注射
Jub5eUA,尿検査(妊娠反応検査を含む)
JlAKyAc,微生物学検査（Gram 染色を含む）
JlAKyAg,12 誘導心電図の記録
JlAKyAk,臨床判断のための簡易エコー(FAST含む)
JlAKyAs,病原体抗原の迅速検査
JlAKyAw,簡易血糖測定
JlAKyA0,清潔操作
JlAKyA4,手術や手技のための手洗い
JlAKyA8,手術室におけるガウンテクニック
JlAKyBA,基本的な縫合と抜糸

以下に医学生の記録を示します。医学生の記録を読みとって、目標の中で医学生が経験したと思われることをカンマ区切りのidで出力してください。説明や確認は出力しないでください。

---
`
