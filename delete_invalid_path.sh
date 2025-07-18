#!/bin/bash

# 🛠 삭제 대상 파일 경로 (문제가 되는 경로 그대로 입력)
TARGET_FILE="다이어그램/한기북다이어그램/위시리스트:카트 버튼.drawio"

# 🧭 현재 브랜치 이름 가져오기
BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

echo "🔍 현재 브랜치: $BRANCH_NAME"
echo "📁 삭제 대상: $TARGET_FILE"

# 🚫 파일 존재 여부 확인
if git ls-files | grep -Fxq "$TARGET_FILE"; then
  echo "🧹 파일 삭제 중..."
  git rm "$TARGET_FILE"
  git commit -m "fix: remove invalid path file ($TARGET_FILE)"
  git push origin "$BRANCH_NAME"
  echo "✅ 삭제 완료 및 푸시 완료"
else
  echo "⚠️ 해당 파일이 Git 트래킹 목록에 존재하지 않습니다."
fi
