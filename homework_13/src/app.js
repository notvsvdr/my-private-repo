angular.module('blog', []).controller('ctrl', [
    '$scope', function ($scope) {

        $scope.getUniqueCategories = () => {
            let tempCategories = [];
            $scope.posts.forEach(postElem => {
                postElem.categories.forEach(categoryElem => {
                    if (tempCategories.indexOf(categoryElem) === -1) {
                        tempCategories.push(categoryElem);
                    }
                });
            });

            tempCategories.unshift('All');

            return tempCategories;
        }

        $scope.addPost = () => {
            if (!($scope.newTitle && $scope.newDescription && $scope.newCategories && $scope.newPhoto)) {
                $scope.errorActive = true;
                return;
            }

            let fixedCategories = $scope.newCategories.split(/[ ,]+/);
            fixedCategories.map(category => {
                return category.charAt(0).toUpperCase() + category.substr(1);
            });

            $scope.posts.push({
                title: $scope.newTitle,
                description: $scope.newDescription,
                categories: fixedCategories,
                photo: `../assets/${$scope.newPhoto}`
            });

            //reset form
            $scope.newTitle = '';
            $scope.newDescription = '';
            $scope.newCategories = '';
            $scope.newPhoto = '';

            $scope.categories = $scope.getUniqueCategories();

            $scope.addPostActive = false;
        }

        $scope.filterPosts = (category) => {
            if (category === 'All') {
                $scope.postsToDisplay = $scope.posts;
                return;
            } else {
                $scope.postsToDisplay = [];
                $scope.posts.forEach(post => {
                    if (post.categories.indexOf(category) !== -1) {
                        $scope.postsToDisplay.push(post);
                    }
                });
            }
        }

        $scope.editPost = (post) => {
            post.categories = categories.split(/[ ,]+/);
            post.editActive = false;
            $scope.editingFalse = false;

            $scope.categories = $scope.getUniqueCategories();
        }

        $scope.posts = defaultPosts;
        $scope.postsToDisplay = $scope.posts;
        $scope.addPostActive = false;
        $scope.editActive = false;
        $scope.editingFalse = false;
        $scope.errorActive = false;
        $scope.categories = $scope.getUniqueCategories();
    }]);