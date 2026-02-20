from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random 
import httpx
import requests
import os                         # 환경변수 접근을 위한 모듈
import httpx                      # 외부 API 호출 라이브러리
from dotenv import load_dotenv    # .env 파일 로딩 라이브러리
load_dotenv()  
import sys
print(sys.executable)
app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "여기는 Home입니다."}

@app.get("/about")
def about():
    return {
        "name": "헤이야치",
        "phone": "02-3123-4567",
        "address": "도쿄시 야마기시현 시바루"
    }

# 랜덤 동물
@app.get("/animal")
def random_animal():
    characteristics = ["귀여운", "용감한", "느긋한", "쏘 쿨한"]
    animals = ["고양이", "강아지", "햄스터", "너구리"]   
    return { "characteristic" : random.choice(characteristics), 
            "animal" :random.choice(animals)}
    
# 명언집
@app.get("/legend")
def random_legend():
    quote = [
        "성공은 준비된 자에게 찾아온다.",
        "노력은 배신하지 않는다.",
        "오늘 걷지 않으면 내일은 뛰어야 한다."
    ]
    return {"quote" : random.choice(quote)}

#고양이 사진
@app.get("/random_cat")
def get_random_cat():
# 외부 API 주소
    url = "https://api.thecatapi.com/v1/images/search?limit=6"
    response = httpx.get(url)
    print(response)
    cats = response.json()
    
    #받아온 데이터 리턴하기
    return cats

@app.get("/festival")
def get_festivals():
    service_key = os.getenv("FESTIVAL_SERVICE_KEY")

    # 데이터를 받아오기 위한 url 및 파라미터
    url = "http://api.data.go.kr/openapi/tn_pubr_public_cltur_fstvl_api"

    params = {
        "serviceKey": service_key,
        "pageNo": "1",
        "numOfRows": "100",
        "type": "json",
    }

    # 데이터 받아오기
    response = httpx.get(url, params=params)
    data = response.json()

    # 리턴
    return data["response"]
        
    




    
    