# Generated by Django 3.1.4 on 2020-12-11 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
                ('phone_number', models.CharField(max_length=200)),
                ('blood_type', models.CharField(max_length=200)),
                ('credit_card', models.CharField(max_length=200)),
                ('gender', models.CharField(max_length=200)),
                ('race', models.CharField(max_length=200)),
                ('age', models.IntegerField()),
            ],
        ),
    ]
