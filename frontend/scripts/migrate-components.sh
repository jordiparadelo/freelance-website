#!/bin/bash

# Create necessary directories
mkdir -p src/components/{ui,layouts,pages}
mkdir -p src/hooks
mkdir -p src/context
mkdir -p src/lib
mkdir -p src/styles

# Copy components from old project
cp -r ../frontend-react/src/components/* src/components/
cp -r ../frontend-react/src/hooks/* src/hooks/
cp -r ../frontend-react/src/context/* src/context/
cp -r ../frontend-react/src/lib/* src/lib/
cp -r ../frontend-react/src/styles/* src/styles/

# Rename .js/.jsx files to .tsx
find src -name "*.js" -o -name "*.jsx" | while read file; do
  mv "$file" "${file%.*}.tsx"
done

# Update imports in all files
find src -type f -name "*.tsx" -exec sed -i '' 's/\.jsx/\.tsx/g' {} +
find src -type f -name "*.tsx" -exec sed -i '' 's/\.js/\.ts/g' {} +

echo "Migration completed. Please review the files and fix any TypeScript errors." 