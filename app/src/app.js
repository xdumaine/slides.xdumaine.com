import Test from './test';

class App {
    constructor() {
        Test.test();

        $('.figure-set').each((i, figureSet) => {
            $(figureSet).find('figure:not(:first)').addClass('collapse');
            $(figureSet).find('.previous').click((i, previous) => {
                var $prev = $(figureSet).find('figure:not(.collapse)').prev('figure');
                if (!$prev || !$prev.length) {
                    $prev = $(figureSet).find('figure').last();
                }
                $(figureSet).find('figure:not(.collapse)').addClass('collapse');
                $prev.removeClass('collapse');
                return false;
            });
            $(figureSet).find('.next').click((i, next) => {
                var $next = $(figureSet).find('figure:not(.collapse)').next('figure');
                if (!$next || !$next.length) {
                    $next = $(figureSet).find('figure').first();
                }
                $(figureSet).find('figure:not(.collapse)').addClass('collapse');
                $next.removeClass('collapse');
                return false;
            });
        });
    }
}

export default new App();
