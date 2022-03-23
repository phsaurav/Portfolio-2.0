from django.db import models
from django.utils.translation import gettext as _

class Project(models.Model):
    img1 = models.URLField(max_length=200, verbose_name=_('First Project Screenshot'))
    img2 = models.URLField(max_length=200, verbose_name=_('Second Project Screenshot'))
    img3 = models.URLField(max_length=200, verbose_name=_('Third Project Screenshot'))
    title = models.CharField(max_length=100, verbose_name=_('Projcet Title'))
    subtitle = models.CharField(max_length=200, blank=True, verbose_name=_('Project Description'))
    liveLink = models.URLField(max_length=200, verbose_name=_('Project Live Link'))
    gitLink = models.URLField(max_length=200, verbose_name=_('Github Live Link'))

    class Meta:
        verbose_name = _('Project')
        verbose_name_plural = _('Projects')

    def __str__(self):
        return self.title
